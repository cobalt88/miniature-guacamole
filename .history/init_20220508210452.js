const initPrompt = require('./src/initialPrompt');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
require('console.table');


initPrompt();
