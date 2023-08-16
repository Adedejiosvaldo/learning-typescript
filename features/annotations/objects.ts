const profile = {
  name: "Alex",
  age: 20,
  cords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
