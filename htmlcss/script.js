let selectSort = (arr) => {
    for (let i = 0; i < arr.length-1; i++) {
        let minimum = i;
        
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) {
                minimum = j
            }
            console.log(arr, "i=",i,"j=",j,"min=",minimum)
        }

        [arr[i],arr[minimum]] = [arr[minimum],arr[i]]
        console.log("EOA")
    }
}

selectSort([2,4,3,6,5,1]);