

// type TPromiseReject<T> = (value: T) => void
// type TPromiseResolve<T> = (reason: T) => void
// type TPromiseExecutor<T, K> = (resolve: TPromiseResolve<T>, reject: TPromiseReject<K>) => void


// type TPromiseThenCallBack<T> = (value: T | undefined) => void 
// type TPromiseCatchCallBack<T> = (reason: T | undefined)  => void 
// type TPromiseFinallyCallBack = ()  => void 


// enum PromiseState {
//     PENDING = "pending",
//     FULLFILLED = 'fullfilled',
//     REJECTED = "rejected"
// }

// class myPromise<T, K> {
//     private _state: PromiseState = PromiseState.PENDING

//     private _successCallBackHandler:TPromiseThenCallBack<T> [] =[]
//     private _failureCallBackHandler:TPromiseCatchCallBack<K> [] =[]
//     private _finallyCallbackHandler:TPromiseFinallyCallBack | undefined= undefined


//     private _value:T | undefined = undefined
//     private _reason:K | undefined = undefined
    

//     constructor(executor: TPromiseExecutor<T, K>) {
//         executor(
//             this._promiseResolver.bind(this) , this._promiseRejector.bind(this)
//         );

//     }

//     // it's need to register or push in callBackHandler for .then fnc
//     public then(handlerFn:TPromiseThenCallBack<T>){
//         if(this._state === PromiseState.FULLFILLED){
//             handlerFn(this._value)
//         }
//         else {

//             this._successCallBackHandler.push(handlerFn)
//         }
//         return this
//     }
//     public catch(handlerFn:TPromiseCatchCallBack<K>){
//            if(this._state === PromiseState.REJECTED){
//             handlerFn(this._reason)
//            } 
//            else {

//                this._failureCallBackHandler.push(handlerFn)
//             }
//             return this
//     }

//     public finally(handlerFn:TPromiseFinallyCallBack){
//   if(this._state !== PromiseState.PENDING) return handlerFn
//   this._finallyCallbackHandler = handlerFn
//     }


//     private _promiseResolver(value:T){
//         if(this._state === PromiseState.FULLFILLED) return
//         this._state = PromiseState.FULLFILLED
//         this._value = value
//         this._successCallBackHandler.forEach((cb)=>(value));
//         if(this._finallyCallbackHandler){
//             this._finallyCallbackHandler()
//         }
//      }
//     private _promiseRejector(reason:K){
//         if(this._state === PromiseState.REJECTED) return
//         this._state = PromiseState.REJECTED
//         this._reason =reason
//         this._failureCallBackHandler.forEach((cb)=>(reason));
//          if(this._finallyCallbackHandler){
//             this._finallyCallbackHandler()
//         }
//     }


    
// }



type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<T> = (reason: T) => void;

type TPromiseExecutor<T, K> = (
  resolve: TPromiseResolve<T>,
  reject: TPromiseReject<K>
) => void;

type TPromiseThenCallback<T> = (value: T | undefined) => void;
type TPromiseCatchCallback<T> = (reason: T | undefined) => void;
type TPromiseFinallyCallback = () => void;

enum PromiseState {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECETD = 'rejected',
}

class MyPromise<T, K> {
  private _state: PromiseState = PromiseState.PENDING;

  private _successCallbackHandlers: TPromiseThenCallback<T>[] = [];
  private _failureCallbackHandlers: TPromiseCatchCallback<K>[] = [];
  private _finallyCallbackHandler: TPromiseFinallyCallback | undefined =
    undefined;

  private _value: T | undefined = undefined;
  private _reason: K | undefined = undefined;

  constructor(executor: TPromiseExecutor<T, K>) {
    executor(
      this._promiseResolver.bind(this),
      this._promiseRejector.bind(this)
    );
  }

  public then(handlerFn: TPromiseThenCallback<T>) {
    if (this._state === PromiseState.FULFILLED) {
      handlerFn(this._value);
    } else {
      this._successCallbackHandlers.push(handlerFn);
    }
    return this;
  }

  public catch(handlerFn: TPromiseCatchCallback<K>) {
    if (this._state === PromiseState.REJECETD) {
      handlerFn(this._reason);
    } else {
      this._failureCallbackHandlers.push(handlerFn);
    }
    return this;
  }

  public finally(handlerFn: TPromiseFinallyCallback) {
    if (this._state !== PromiseState.PENDING) return handlerFn();
    this._finallyCallbackHandler = handlerFn;
  }

  private _promiseResolver(value: T) {
    if (this._state === PromiseState.FULFILLED) return;
    this._state = PromiseState.FULFILLED;
    this._value = value;
    this._successCallbackHandlers.forEach((cb) => cb(value));
    if (this._finallyCallbackHandler) this._finallyCallbackHandler();
  }

  private _promiseRejector(reason: K) {
    if (this._state === PromiseState.REJECETD) return;
    this._state = PromiseState.REJECETD;
    this._reason = reason;
    this._failureCallbackHandlers.forEach((cb) => cb(reason));
    if (this._finallyCallbackHandler) this._finallyCallbackHandler();
  }
}


// function customPromise() {
//     return new myPromise((resolve, reject) => {
//         resolve(1)
//     })
// }

const waitFor  = (s:number) =>
     new MyPromise<number, number>((res, rej) =>{
    setTimeout(()=> res(s), s*1000);
});

function customPromise(){
    return new MyPromise<string, string> ((res, rej)=>{
        res("OK");
    })
}
customPromise().then(()=> console.log("Custom Promise DOne")).catch((reason)=> console.log("Error", reason))
waitFor(5)
.then((value)=> {
    console.log(`promsie resolve`, value)
})
 .catch((reason)=>{
            console.log(`Promise rejected`, reason);
            
})
.finally(()=>[
 console.log("all goood")
 
])

