var expect = require('chai').expect
var request = require('request')


describe('Check pages', function() {
    it('should be response Muhi Library', function(done) {
        request('https://api-muhilibrary.herokuapp.com/', function(error, response, body) {
            expect(response.statusCode).to.equal(200)
            done()
                  
        })
    })
    it('invalid Token because must be login', function(done) {
        request('https://api-muhilibrary.herokuapp.com//books', function(error, response, body) {
            expect(response.statusCode).to.equal(401)
            done()     
        })
    })

  })

  