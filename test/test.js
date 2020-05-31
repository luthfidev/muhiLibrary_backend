var expect = require('chai').expect
var request = require('request')


describe('Check pages', function() {
    it('should be response Muhi Library', function(done) {
        request('http://localhost:5000/', function(error, response, body) {
            expect(response.statusCode).to.equal(200)
            done()
                  
        })
    })
    it('invalid Token because must be login', function(done) {
        request('http://localhost:5000/books', function(error, response, body) {
            expect(response.statusCode).to.equal(401)
            done()     
        })
    })

  })

  