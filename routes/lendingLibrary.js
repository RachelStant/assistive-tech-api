import express, { Router } from 'express';
import { getLendingLibraryByState, getAllLendingLibraries } from '../controllers/lendingLibrary.js';


const lendingRouter = express.Router()

lendingRouter.get('/:state', getLendingLibraryByState)
lendingRouter.get('/', getAllLendingLibraries)


export default lendingRouter;