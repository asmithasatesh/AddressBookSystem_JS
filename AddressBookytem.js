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


   //Usecase 2: Add Regex Expresions
   constructor(firstName,lastName,address,city,state,zip,phoneNumber,email)
   {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    let emailRegex=RegExp('^[a-zA-Z0-9]+([\.\+\-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]+)?)$');
    let addressRegex=RegExp('^[A-za-z]{4,}');
    let phoneRegex=RegExp('^[0-9]+\\s[0-9]{10}$');
    let zipRegex=RegExp('^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$');
    if(nameRegex.test(firstName) && nameRegex.test(lastName))
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    else throw 'Name is Incorrect';
    if(emailRegex.test(email))
    {
        this.email=email;
    }
    else throw 'Email is Incorrect';
    if(addressRegex.test(address) && addressRegex.test(city) && addressRegex.test(state))
    {
        this.address=address;
        this.city=city;
        this.state=state;
    }
    else throw 'Address is Incorrect';
    if(phoneRegex.test(phoneNumber)) 
    {
        this.phoneNumber=phoneNumber;
    }   
    else throw 'Phoen Number is Incorrect';  
    if(zipRegex.test(zip))
    {
        this.zip=zip;
    } 
    else throw 'Zip is Incorrect';

   }

   toString()
   {
    return ("Name: " + this.firstName +" "+ this.lastName + " \t Address: " +this.address+" \t City: " +this.city+" \t State: "+this.state+" \t Pincode: " +this.zip+" \t Phone Number: "+this.phoneNumber+" \t Email Id: "+this.email);
        
   }
}

//Usecase 1: Create contacts and display 
try
{
    var contactList=new Array();
    let number= parseInt(prompt("Enter number of contacts to be created:  "));
    var contactClassObject;
    while(number--)
    {
        let firstName= prompt("Enter First Name:  ");
        let lastName=prompt("Enter Last Name:  ");
        let address=prompt("Enter Address:  ");
        let city=prompt("Enter City:  ");
        let state=prompt("Enter State:  ");
        let zip=prompt("Enter Zip:  ");
        let phoneNumber=prompt("Enter Phone Number:  ");
        let email=prompt("Enter Email:  ");
        contactClassObject=new ContactClass(firstName,lastName,address,city,state,zip,phoneNumber,email);
        contactList.push(contactClassObject);
    }
}
catch(e)
{
    console.error(e);
}

contactList.forEach(element => {
    console.log(element.toString());
});