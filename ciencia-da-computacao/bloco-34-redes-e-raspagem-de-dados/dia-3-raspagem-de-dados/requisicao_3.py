import requests

URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"


response = requests.get(
    URL, headers={"User-agent": "Mozilla", "Accept": "text/html"}
)

assert "bot detected" not in response.text
