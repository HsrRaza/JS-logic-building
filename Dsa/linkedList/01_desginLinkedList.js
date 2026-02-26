// make class of node with value and next pointer as null initially

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// make class of linked list with head  as a  null and size as 0 initially

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // if the  linked list is empty, return true, else false
    isEmpty(){
        return this.size === 0 ;
    }

    // get the size of a linked List
        
    getSize(){
        return this.size;
    }

    // add a node at the end of the linked list
    // time complexity of this function is O(n) because we need to traverse the linked list to find the last node, which is the node whose next pointer is null, and then we can add the new node at the end of the linked list by assigning the next pointer of the last node to the new node.
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else {
            let prev = this.head;
            while(prev.next){ // traverse the linked list until we reach the last node, which is the node whose next pointer is null
                prev = prev.next;  // update the prev pointer to the next node until we reach the last node
            }
            prev.next = node;  // add a node at the end of the linked list by assigning the next pointer of the last node to the new node
        }       

        this.size++;
    }

    //  add a node at the start of the linked list
    // time complexity of this function is O(1) because we are adding a node at the start of the linked list, so we don't need to traverse the linked list to find the last node, we can directly add the new node at the start of the linked list by assigning the next pointer of the new node to the head and then assigning head to the new node.
    prepend(value){
        const node = new Node(value);
        //  we can optimise this code by removing the if else condition and directly assign the next pointer of node to head and then assign head to node, because if the linked list is empty then head will be null and if it is not empty then head will point to the first node of the linked list, so in both cases we can directly assign the next pointer of node to head and then assign head to node.
        // but for better understanding we can use if else condition to check if the linked list is empty or not, if it is empty then we can directly assign head to node, else we can assign the next pointer of node to head and then assign head to node.


        if(this.isEmpty()){
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head =node;
        }
        this.size++;
    }

    insert(value, index){
        if(index< 0 || index > this.size ) return; // if the index is less than 0 or greater than the size of the linked list, then we can't insert the node at that index, so we return from the function

        if(index === 0){ // if the index is 0, then we can directly add a node at the start of the linked list by calling the prepend function

            this.prepend(value);
        }else {
            const node= new Node(value);
            let prev = this.head;

            for(let i=0; i<index-1;i++ ){
                prev = prev.next; // traverse the linked list until we reach the node at index-1, which is the node before the index where we want to insert the new node, and then we can add the new node at that index by assigning the next pointer of the new node to the next pointer of the prev node and then assigning the next pointer of the prev node to the new node.
            }
            node.next = prev.next; // assign the next pointer of the new node to the next pointer of the prev node
            prev.next = node; // assign the next pointer of the prev node to the new node

            this.size++;
        }

            

    }

    removeFrom(index){
        if(index < 0 || index >= this.size ){
            return null
        }    
        
        let removedNode;
        if(index === 0){
            removedNode = this.head 
            this.head = this.head.next
        } else {
            let prev = this.head;
            for(let i = 0 ; i < index -1 ; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode.value;


    }
        
    removeValue(value){
        if(this.isEmpty()){
           return null
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        } else{
            let prev =this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }

            if(prev.next){
              const  removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty ");
            
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr){

                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
            
        }
    }
}

const list = new LinkedList();
console.log("List is Empty ? : ", list.isEmpty());
console.log("List size  : ", list.getSize());

// list.prepend();
list.print();
list.insert(10,0);

list.print();

list.insert(20,0);
list.print();

list.insert(30,1);
list.print();

list.insert(40,2);
list.print();

console.log(list.getSize());

console.log(list.removeValue(40));
list.print();
