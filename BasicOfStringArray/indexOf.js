function indexOf(str,ch){
    for(let i=0;i<=str.length;i++){
     if(str[i]==ch){
        return i
     }
    }
return -1
}

 indexOf("prashant","a")
 indexOf("prashant","t")
 indexOf("prashant","h")


 function lastindexOf(str,ch){
    let t = ch.CharCodeAt()
    let ch1 =""
    if(ch>"A"&&ch<"Z"){
        ch1 = String.fromCharCode(t+32)
    }
    else if(ch>"a"&&ch<"z"){
        ch1 = String.fromCharCode(t-32)
    }
    for(let i=str.length-1;i>=0;i--){
     if(str[i]==ch){
        return i
     }
    }
return -1
}

lastindexOf("prashant","a")
 lastindexOf("prashant","t")
 lastindexOf("prashant","h")

