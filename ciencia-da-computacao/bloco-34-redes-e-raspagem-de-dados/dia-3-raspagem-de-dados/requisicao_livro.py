import requests
from parsel import Selector

response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)

selector = Selector(text=response.text)
title = selector.css(
    "#content_inner > article > div.row > "
    "div.col-sm-6.product_main > h1 ::text"
).get()

price = selector.css(
    "#content_inner > article > div.row > div.col-sm-6.product_main >"
    " p.price_color ::text"
).re_first(r"\d*\.\d{2}")

description = selector.css("#content_inner > article > p ::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

URL_BASE = "http://books.toscrape.com/catalogue/"

image_url = selector.css(
    "#product_gallery > div > div > div > img ::attr(src)"
).get()

stock = selector.css(
    "#content_inner > article > div.row > div.col-sm-6.product_main > "
    "p.instock.availability ::text"
).re_first("\d")

print(f"{title},{price},{description},{URL_BASE + image_url},{stock}")
