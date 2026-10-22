let testexecutionsummary={
    suitename:"Playwright",
    totaltests:10,
    passedtests:8,
    failedtests:2

}
console.log("suitename:",testexecutionsummary.suitename)
console.log("totaltests:",testexecutionsummary.totaltests)
console.log("passedtests:",testexecutionsummary.passedtests)
console.log("failedtests",testexecutionsummary.failedtests)

let passpercentage=(testexecutionsummary.passedtests/testexecutionsummary.totaltests)*100
console.log(passpercentage+'%')
console.log("execution status")
if(testexecutionsummary.failedtests===0){
    console.log("execution successfully")
}
else{
    console.log("execution completed with failures")
}

