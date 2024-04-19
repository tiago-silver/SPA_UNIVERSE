import { Router } from "./router.js"

const router = new Router()

router.add("/",  "pages/home.html")
router.add("/universe", "pages/theUniverse.html")
router.add("/exploration", "pages/exploration.html")
router.add(404, "pages/error.html")

router.addBackground("/", "./assets/mountains-universe-1.png")

router.addBackground("/universe", "./assets/mountains-universe02.png")

router.addBackground("/exploration", "./assets/mountains-universe-3.png")

router.addBackground(404, "./assets/mountains-universe-1.png")




router.handle()

window.onpopstate = () => router.handle()

window.route = router.route()