import Person from "./Person";

const Small = () => {
    let sonny = new Person('Sonny', 'sonny@hotmail.com', '483485-4948');
    let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');    
  return (<div className="container">
    <div>{sonny.greet(jordan)}</div>
    <div>{jordan.greet(sonny)}</div>
    <div>{sonny.contact()}</div>
    <div>{jordan.contact()}</div>
  </div>);
}

export default Small;
