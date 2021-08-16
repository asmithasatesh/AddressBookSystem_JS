var prompt=require("prompt-sync")();


//Class to Create contacts
class ContactClass
{
   firstName;
   lastName;
   address;
   city;
   state;
   zip;
   phoneNumber;
   email;

   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
   {
       this.firstName=firstName;
       this.lastName=lastName;
       this.address=address;
       this.city=city;
       this.state=state;
       this.zip=zip;
       this.phoneNumber=phoneNumber;
       this.email=email;
   }

   toString()
   {
    return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zip+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.email);
        
   }
}

//Usecase 1: Create contacts and display 
var contactList=new Array();
let contactClassObject=new ContactClass("Ash","Sateh","No 5 Bakerlin treet","Chennai","TN",600062,9842905050,"ash@gmail.com");
contactList.push(contactClassObject);
contactClassObject=new ContactClass("Abhishek","Yadav","LB Marg","Lucknow","UP",243001,9842905050,"abhishek@gmail.com");
contactList.push(contactClassObject);

contactList.forEach(element => {
    console.log(element.toString());
});