export const getFightData = async () => {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    Origin: "https://www.espn.com",
    Connection: "keep-alive",
    Referer: "https://www.espn.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    Pragma: "no-cache",
    "Cache-Control": "private, max-age=0, no-cache, must-revalidate",
  };

  const response = await fetch(
    "https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=mma&league=ufc&region=us&lang=en&contentorigin=espn&buyWindow=1m",
    {
      ...headers,
      method: "GET",
      timeout: 30,
    }
  );

  return response.json();
};
