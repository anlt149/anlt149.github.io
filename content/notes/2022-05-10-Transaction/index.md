---
title: Transaction Isolation
date: "2022-05-10"
description: "Note from Velocity meeting"
tags: ["Database"]
---

## 1. Dirty read

- Dirty Reads occur when one transaction reads data written by another, uncommitted, transaction. The danger with dirty reads is that the other transaction might never commit, leaving the original transaction with "dirty" data.

## 2. Nonrepeatable read

- Non Repeatable Reads occur when one transaction attempts to access the same data twice and a second transaction modifies the data between the first transaction's read attempts. This may cause the first transaction to read two different values for the same data, causing the original read to be non-repeatable.

## 3. Phantom read

- Phantom read occurs when, in the course of a transaction, new rows are added or removed by another transaction to the records being read.

### Resource

https://www.postgresql.org/docs/current/transaction-iso.html
