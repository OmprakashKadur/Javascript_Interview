const aob = [
    { framework: "React.JS", website: "Paypal" },
    { framework: "React.JS", website: "Tesla" },
    { framework: "Angular", website: "Google" },
    { framework: "Vue.JS", website: "Vue" },
    { framework: "JavaScript", website: "inblack67" }
  ];
  
  const superAob = (data, victim) => {
    const obj = {};
    data.forEach((data) => {
      if (data.hasOwnProperty(victim)) {
        if (obj[data[victim]]) {
          obj[data[victim]]++;
        } else {
          obj[data[victim]] = 1;
        }
      }
    });
  
    let superArray = [];
    for (const key in obj) {
      superArray = [...superArray, { victim: key, count: obj[key] }];
    }
    return superArray;
  };
  
  console.log(superAob(aob, "framework"));
  