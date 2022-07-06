let baseUrl;
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3000/api";
} else {
  baseUrl = "https://heart-warn.vercel.app/api";
}

export default baseUrl;
