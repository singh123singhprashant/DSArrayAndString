//Question::

//1)Number()
//2)Number()
//let a = "12.2"
//console.log(Number(a)) 12.2 as a Integer



function number1(n){
     if(typeof(n)=="number"){
        return n
    }
    else if
    (typeof(n)=="string"){
        str = "0123456789."
        for(let i=0;i<=n.length;i++){
            if(str.indexOf(n[i]==-1)){
                return NaN
            }
        }
        let num = 0,flag = 0,c=0
        for(let i=0;i<=n.length;i++){
            if(n[i]=="."){
                flag=1
                continue
            }
            let x = n.CharCodeAt(i)
            if(flag==0){
             num = num*10+x-48
        }
        else {
            num=num+(x-48)/10**c
        }
        }
      return num
    }
    
}
console.log(number1(12));
console.log(number1(12.2));
console.log(number1("12"));
console.log(number1("12.2"));
console.log(number1("12p"));
console.log(number1(12.));




