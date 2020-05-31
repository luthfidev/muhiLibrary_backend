const supertest = require('supertest');
const chai = require('chai');
const app = require('../index.js');

global.app = app;
global.expect = chai.expect;
global.request = supertest(app);

describe('Task API Routes', function() {
 /*    // This function will run before every test to clear database
    beforeEach(function(done) {
        app.db.object = {};
        app.db.object.tasks = [{
            id: uuid(),
            title: 'study',
            done: false
        }, {
            id: uuid(),
            title: 'work',
            done: true
        }];
        app.db.write();
        done();
    }); */

    // In this test it's expected a task list of two tasks
    describe('GET /', function() {
        it('returns a list of tasks', function(done) {
            request.get('/')
                .expect(200)
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(200);
                    done(err);
                });
        });

        it('returns status 404 not found', function(done) {
            request.get('/notfound')
                .expect(404)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Testing the save task expecting status 201 of success
    
    describe('POST /auth/signin',  function() {
        it('Login a success', function(done) {
             request.post('/auth/signin')
                .set("Connection", "keep alive")
                .set("Content-Type", "application/json")
                .send({"email": 'user15@lib.com', password: "user15"})
                .end(function(err, res) {
                done(err);
            });
        });
    });



    /* // Here it'll be tested two behaviors when try to find a task by id
    describe('GET /tasks/:id', function() {
        // Testing how to find a task by id
        it('returns a task by id', function(done) {
            var task = app.db('tasks').first();
            request.get('/tasks/' + task.id)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body).to.eql(task);
                    done(err);
                });
        });

        // Testing the status 404 for task not found
        
    });

    // Testing how to update a task expecting status 201 of success
    describe('PUT /tasks/:id', function() {
        it('updates a task', function(done) {
            var task = app.db('tasks').first();
            request.put('/tasks/' + task.id)
                .send({
                    title: 'travel',
                    done: false
                })
                .expect(201)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Testing how to delete a task expecting status 201 of success
    describe('DELETE /tasks/:id', function() {
        it('removes a task', function(done) {
            var task = app.db('tasks').first();
            request.put('/tasks/' + task.id)
                .expect(201)
                .end(function(err, res) {
                    done(err);
                });
        });
    }); */
});