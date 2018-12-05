/**
 * Callbacks
 */

// With one, it's simple enough
$.get('https://httpbin.org/get?data=1', function(response) {
    // Now I have some data
});

// Callbacks get nested ad infinitum
$.get('https://httpbin.org/get', function(response) {
    // Now I have some data
        
    $.get('https://httpbin.org/get', function(response) {
        // Now I have some more data
                
        $.get('https://httpbin.org/get', function(response) {
            // Now I have even more data!
        });
    });
});

/**
 * Promises
 */
 
// One Promise
axios.get('https://httpbin.org/data')
    .then(function(response) {
        // now I have some data
    });

// Multiple promises in sequence, no nesting
axios.get('https://httpbin.org/data')
    .then(function(response) {
        // now I have some data
        
        return axios.get('https://httpbin.org/data')
    })
    .then(function(response) {
        // now I have some data
        
        return axios.get('https://httpbin.org/data')
    });

/**
 * Async / Await
 */
 
// One request
async function getSomeThings() {
    var response = await axios.get('https://httpbin.org/data');
    
    // now I have some data
}

// Multiple requests
async function getSomeThings() {
    var response1 = await axios.get('https://httpbin.org/data');
    var response2 = await axios.get('https://httpbin.org/data');
    var response3 = await axios.get('https://httpbin.org/data');
    
    // Now I have lots of data
}