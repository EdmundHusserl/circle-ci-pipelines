describe("This is just a very basic test", () => {
    
    const cles: string[] = [ "date", "time" ]
    
    it.only("that can run in circle-ci pipeline", () => {
        cy.request("http://time.jsontest.com")
            .then( (res) => {
                expect(res.status).to.eql(200)
                cles.forEach( (key) => expect(res.body[key]).not.eql(undefined) )
            })
    })
})