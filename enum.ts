enum Environment{
    Local,
    Development,
    Staging,
    Production
}
function runTests(environment:Environment):void{
    console.log(`running test in ${Environment [environment]} environment`);
}
runTests(Environment.Local)
runTests(Environment.Development)
runTests(Environment.Staging)
runTests(Environment.Production)

