import { Router } from "./router.js"

const router = new Router()

router.add("/",  "pages/home.html")
router.add("/universe", "pages/theUniverse.html")
router.add("/exploration", "pages/exploration.html")
router.add(404, "pages/error.html")


router.handle()

window.onpopstate = () => router.handle()

window.route = router.route()