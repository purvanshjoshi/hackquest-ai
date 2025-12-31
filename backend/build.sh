#!/bin/bash
set -e

echo "Upgrading pip and setuptools..."
pip install --upgrade pip setuptools wheel

echo "Installing requirements..."
pip install -r requirements-prod.txt
