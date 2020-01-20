describe('my first test', () => {
    let sut;

    // resets the state before each test.
    beforeEach(() => {
        sut = {};
    })

    // e.g. 'user service getUser method should retrieve the correct user'
    it('should be true if true', () => {
        // ARRANGE all necessary preconditions and inputs
        sut.a = false;

        // ACT on the object or class under test
        sut.a = true;

        // ASSERT that the expected results have occurred
        expect(sut.a).toBe(true);
    })
})

// DRY - don't repeat yourself, remove duplication.

// DAMP - good tests follow this, repeat yourself if necessary
// A test should be a complete story,  all within the it()
// You shouldn't need to look around much to understand the test
// Techniques - Move less intersting setup into beforeEach(), Keep critical setup within the it(), and Include ARRANGE, ACT, and ASSERT inside the it()