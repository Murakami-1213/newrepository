import {Server} from "https://js.sabae.cc/Server.js";
class MyServer extends Server {
    api(path) {
        console.log(req);
        return {name: "jigintern", path: path};
    }
}

new MyServer(8884);
