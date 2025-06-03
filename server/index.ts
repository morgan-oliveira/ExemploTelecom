import express from "express";
import cors from 'cors';

const index = express();
index.use(cors());
index.use(express.json())