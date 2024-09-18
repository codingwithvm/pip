import axios from "axios";

const config = {
  baseURL:
    "https://symmetrical-space-bassoon-6qqqjr4p9g92rp6j-3000.app.github.dev/",
}

export const api = axios.create(config)