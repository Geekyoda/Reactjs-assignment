
// Your son took a vacation through Europe without telling you.When the kid returned from the vacation you asked him where he go.The kid told you: Dad I went to these cities: Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
// I used only train as transportation and these were the available tickets:
// Paris - Skopje, Zurich - Amsterdam, Prague - Zurich, Barcelona - Berlin, Kiev - Prague, Skopje - Paris, Amsterdam - Barcelona, Berlin - Kiev, Berlin - Amsterdam.
// You know that your kid started with Kiev
// Write a data structure and algorithm that will give you the route which your son was traveling.



// Define the graph as an adjacency list

const graph = {
    Kiev: ['Prague'],
    Prague: ['Zurich', 'Kiev'],
    Zurich: ['Amsterdam', 'Prague'],
    Amsterdam: ['Barcelona', 'Berlin', 'Zurich'],
    Barcelona: ['Berlin', 'Amsterdam'],
    Berlin: ['Kiev', 'Amsterdam'],
};

// Define the visited set to keep track of visited vertices
const visited = new Set();

// Define the DFS function
function dfs(city) {
    visited.add(city);
    console.log(city);

    if (city === 'Barcelona') {
        // We have found the end of the route
        return true;
    }

    for (const neighbor of graph[city]) {
        if (!visited.has(neighbor)) {
            if (dfs(neighbor)) {
                // The end of the route has been found, return true
                return true;
            }
        }
    }

    // The end of the route has not been found from this city, backtrack
    visited.delete(city);
    return false;
}

// Call the DFS function starting from Kiev
dfs('Kiev');
