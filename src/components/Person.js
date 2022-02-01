class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(other) {
        return <h3>Hello {other.name}, I am {this.name}</h3>
    }
    contact() {
        return(
            <ul>
                <li>Name: {this.name}</li>
                <li>eMail: {this.email}</li>
                <li>Phone: {this.phone}</li>
            </ul>
        );
    }
}


export default Person;