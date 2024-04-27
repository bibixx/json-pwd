import data from "../data/user.json" with { type: "json" };

export default function handler(request, response) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const basicAuth = authHeader.split(" ")[1];
  const credentials = Buffer.from(basicAuth, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");
  if (username !== "adrian" || password !== "newey") {
    return response.status(401).json({ message: "Unauthorized" });
  }

  response.status(200).json(data);
}
