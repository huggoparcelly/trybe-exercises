import requests


def fetch_git(url):
    response = requests.get(url)

    return response.json()


def users(url):
    for user in fetch_git(url):
        print(f"{user['login']} {user['url']}")


if __name__ == "__main__":
    URL = "https://api.github.com/users"
    users(URL)
