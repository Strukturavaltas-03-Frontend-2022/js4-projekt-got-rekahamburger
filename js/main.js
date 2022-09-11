
//Ez a 100. verzió, amit probálok. sajnos nem tudtam megoldani:( az aside-ot.



let got = async() => {

  //let bioname =json.parse('../got.json');
  let bioname = await fetch('../json/got.json');
  let result = await bioname.json();
  
  for (let i=0; i<result.length; i++) {
   let pname= document.getElementsByClassName('pp');
    if (pname ==result[i].name){

      return document.getElementsByClassName('leiras').innerHTML=result[i].bio;
    };
  };
};