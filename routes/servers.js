import {Router} from 'express'
import {getALL, create, remove} from '../controllers/servers.js'
const router = Router()

router.get('/api/server', getALL)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

// router.put()
// router.patch()

export default router
