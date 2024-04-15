const object = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property);
  
      const innerMethod = () => {
        console.log(this.property);
      };
  
      innerMethod();
    },
  };
  
  object.outerMethod();