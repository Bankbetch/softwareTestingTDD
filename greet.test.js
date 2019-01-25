const greet = require('./geet')
// const greetRequirementSeven = require('./geet')
test('Write a method greet(name)',()=>{
    expect(greet("Bob"))
})

test('when name is "Bob", the method should return a string "Hello, Bob."',()=>{
    expect(greet("Bob")).toBe("Hello, Bob.")
})

test('when name is "Bob", the method should return a string "Hello, Bob."',()=>{
    expect(greet("Bank")).toBe("Hello, Bank.")
})

//Requirement 2

test('s null, then the method should return the string "Hello, my friend."',()=>{
expect(greet(null)).toBe("Hello, my friend.")
})

//Requirement 3

test('when name is "JERRY" then the method should return the string "HELLO JERRY!"',()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!")
})

//Requirement 4

test(' when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."',()=>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.")
})

//Requirement 5

test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."',()=>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
})

//Requirement 6

test('then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"',()=>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
})

//Requirement 7
// test('when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".',()=>{
//     expect(greetRequirementSeven(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.")
// })