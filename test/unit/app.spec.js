describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return vowels in palindrome word', function () {
            expect(app.generateMessage("ala")).toEqual({vowel: 2, palindrome: true});
            expect(app.generateMessage("kajak")).toEqual({vowel: 2, palindrome: true});
        });

        it('should return vowels in non-palindrome word', function () {
            expect(app.generateMessage("slawek")).toEqual({vowel: 2, palindrome: false});
            expect(app.generateMessage("student")).toEqual({vowel: 2, palindrome: false});
        });

    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome');
                app.isPalindrome("ala");
            });
            it('should call isPalindrome function', function () {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith("ala");
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage("ala");
            });
            it('should call isPalindrome function when generateMessage function is called', function () {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith("ala");
            });
        });

        describe('and.returnValue', function () {
            var result;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call function isPalindrome and return true', function () {
                result = app.isPalindrome("ala");
                expect(result).toBe(true);
            });
            it('should call function generateMessage and return object {2, true}', function () {
                result = app.generateMessage("ala");
                expect(result).toEqual({vowel: 2, palindrome: true});
            });
        });

        describe('and.callFake', function () {
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callFake(function () {
                    return 'It is fake function, remember!'
                });
            });
            it('should call isPalindrome fake function', function () {
                expect(app.isPalindrome("slawek")).toEqual('It is fake function, remember!');
            });
            it('should call generateMessage and isPalindrome fake function', function () {
                expect(app.generateMessage("ala")).toEqual({vowel: 2, palindrome: 'It is fake function, remember!'});
            });
        });

        describe('calls.count()', function () {
            var result;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
            });
            it('should call isPalindrome function', function () {
                result = app.isPalindrome("ala");
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should notice that functions isPalindrome and generateMessage are called', function () {
                result = app.generateMessage("kajak");
                expect(app.isPalindrome.calls.count()).toEqual(2);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount');
                app.vowelCount("ala");
            });
            it('should call vowelCount function', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith("ala");
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage("ala");
            });
            it('should call vowelCount function when generateMessage function is called', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith("ala");
            });
        });

        describe('and.returnValue', function () {
            var result;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call function vowelCount and return 2', function () {
                result = app.vowelCount("ala");
                expect(result).toBe(2);
            });
            it('should call function generateMessage and return object {2, true}', function () {
                result = app.generateMessage("ala");
                expect(result).toEqual({vowel: 2, palindrome: true});
            });
        });

        describe('and.callFake', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callFake(function () {
                    return 'It is fake function, remember!'
                });
            });
            it('should call vowelCount fake function', function () {
                expect(app.vowelCount("slawek")).toEqual('It is fake function, remember!');
            });
            it('should call generateMessage and vowelCount fake function', function () {
                expect(app.generateMessage("ala")).toEqual({vowel: 'It is fake function, remember!', palindrome: true});
            });
        });

        describe('calls.count()', function () {
            var result;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('should call vowelCount function', function () {
                result = app.vowelCount("ala");
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should notice that functions vowelCount and generateMessage are called', function () {
                result = app.generateMessage("kajak");
                expect(app.vowelCount.calls.count()).toEqual(2);
            });
        });
    });
});

