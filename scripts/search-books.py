#!/usr/bin/env python3
"""Run book cover searches and extract the first result URL for each."""
import json
import subprocess
import sys

# Real acclaimed literary books that fit a readers club
books = [
    {"query": "The Kite Runner Khaled Hosseini book cover", "title": "The Kite Runner", "author": "Khaled Hosseini", "genre": "Historical Fiction", "year": "2003"},
    {"query": "Half of a Yellow Sun Chimamanda Ngozi Adichie book cover", "title": "Half of a Yellow Sun", "author": "Chimamanda Ngozi Adichie", "genre": "Historical Fiction", "year": "2006"},
    {"query": "The God of Small Things Arundhati Roy book cover", "title": "The God of Small Things", "author": "Arundhati Roy", "genre": "Literary Fiction", "year": "1997"},
    {"query": "Things Fall Apart Chinua Achebe book cover", "title": "Things Fall Apart", "author": "Chinua Achebe", "genre": "Literary Fiction", "year": "1958"},
    {"query": "Beloved Toni Morrison book cover", "title": "Beloved", "author": "Toni Morrison", "genre": "Literary Fiction", "year": "1987"},
    {"query": "The Remains of the Day Kazuo Ishiguro book cover", "title": "The Remains of the Day", "author": "Kazuo Ishiguro", "genre": "Literary Fiction", "year": "1989"},
    {"query": "One Hundred Years of Solitude Gabriel Garcia Marquez book cover", "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez", "genre": "Magical Realism", "year": "1967"},
    {"query": "The Book Thief Markus Zusak book cover", "title": "The Book Thief", "author": "Markus Zusak", "genre": "Historical Fiction", "year": "2005"},
    {"query": "Americanah Chimamanda Ngozi Adichie book cover", "title": "Americanah", "author": "Chimamanda Ngozi Adichie", "genre": "Literary Fiction", "year": "2013"},
]

results = []
for i, book in enumerate(books, 1):
    print(f"Searching {i}/{len(books)}: {book['title']}...", file=sys.stderr)
    try:
        proc = subprocess.run(
            ["z-ai", "image-search", "-q", book["query"], "-c", "2", "--gl", "us", "--no-rank"],
            capture_output=True, text=True, timeout=180
        )
        output = proc.stdout
        # Find the JSON block (skip status lines)
        json_start = output.find("{")
        if json_start == -1:
            print(f"  No JSON found for {book['title']}", file=sys.stderr)
            results.append({**book, "cover_url": None})
            continue
        data = json.loads(output[json_start:])
        if data.get("success") and data.get("results"):
            url = data["results"][0]["original_url"]
            print(f"  Found: {url}", file=sys.stderr)
            results.append({**book, "cover_url": url})
        else:
            print(f"  No results for {book['title']}", file=sys.stderr)
            results.append({**book, "cover_url": None})
    except Exception as e:
        print(f"  Error: {e}", file=sys.stderr)
        results.append({**book, "cover_url": None})

# Save final results
with open("/home/z/my-project/scripts/books-final.json", "w") as f:
    json.dump(results, f, indent=2)

print("\n=== FINAL RESULTS ===", file=sys.stderr)
for r in results:
    print(f"{r['title']}: {r['cover_url']}", file=sys.stderr)
