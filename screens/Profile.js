class Profile {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
    }
  
    displayProfile() {
      console.log(`Nome: ${this.name}`);
      console.log(`Idade: ${this.age}`);
    }
  }
  
  const myProfile = new Profile("Ana Clara", 14);
  myProfile.displayProfile();