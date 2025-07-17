const {test, expect} = require('@playwright/test');

const userid = 2;

test("Get users", async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test("Create user", async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "Srini",
                "job": "Tester"
            },
            headers:{
                "Accept": "application/json"
            }
        });
        console.log(await response.json());
        expect(response.status()).toBe(201);
        var res = await response.json();
        res.id;
        console.log("User created successfully with user id: " + res.id);
})

test("Update user", async ({request}) => {
        const response = await request.put('https://reqres.in/api/users/' + userid,
        {
            data: {
                "name": "Sam",
                "job": "Cricketer"
            },
            headers:{
                "Accept": "application/json"
            }
        });
        console.log(await response.json());
        expect(response.status()).toBe(200);
        var res = await response.json();
        res.name;
        console.log("User updated successfully for user name: " + res.name);
})

test("Delete user", async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/' + userid);
    expect(response.status()).toBe(204);
})