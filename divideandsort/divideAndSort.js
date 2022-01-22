const divideAndSort = (num) => {
  let div = 0;
  let res, temp;
  let result = ""
  if(typeof num !== 'number')
  {
      console.log("Harus deret angka");
  }
  else
  {
      res = num.toString().split(div);
      for(let i = 0; i < res.length; i++)
      {
          temp = res[i].split('').sort((a,b)=>a-b).join('');
          result = result + temp;
      }
  }
  console.log(parseInt(result));
  
}
divideAndSort(43500432098)