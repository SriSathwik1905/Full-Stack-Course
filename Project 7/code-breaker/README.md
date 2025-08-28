# Code Breaker – The Array Heist

## Game Concept
You are a hacker in training, trying to break into a secure system by manipulating a digital code array. The vault’s password is hidden in a pattern within the array. Your mission:
- Insert digits to build potential codes
- Delete wrong digits to fix mistakes
- Search for secret patterns (e.g., [2, 1, 4]) to unlock clues
- Crack the code before time runs out!

This game teaches:
- Insertion
- Deletion
- Linear Search for Subarrays (Pattern Matching)
- Array bounds and shifting logic

## How to Play
1. **Visual Array Display**: See an array of 8 cells. Each cell holds a number (0–9) or is empty.
2. **Operations Panel**:
   - Insert at Index: Add a number at a given index; shift others right
   - Delete at Index: Remove number at index; shift left
   - Search for Pattern: Find a subarray (e.g., [2, 1, 4]) in the array
   - Reset: Clear the array
3. **Inputs**:
   - Index: number input (0–7)
   - Value: number input (0–9)
   - Pattern: text input like 2,1,4
4. **Animations**:
   - Insert: Elements slide right; new number fades in
   - Delete: Elements slide left; deleted number shrinks and fades
   - Search: Highlights each segment as it checks for the pattern
5. **Feedback System**: Messages for all actions and errors.

## Game Features
- Auto-generates a secret pattern for each level
- 60-second timer per level
- Sound effects for insert, error, and victory (add your own .mp3 files)
- Multiple levels:
  - Level 1: Find any 2-digit pattern
  - Level 2: Find a 3-digit pattern
  - Level 3: Find a pattern in reverse order

## Getting Started
1. Open `index.html` in your browser.
2. Add your own sound files to `beep.mp3`, `buzz.mp3`, and `fanfare.mp3` for full experience.
3. Play and try to crack the code before time runs out!

## File Structure
- `index.html` – Main game UI
- `style.css` – Game styles and animations
- `script.js` – Game logic
- `beep.mp3`, `buzz.mp3`, `fanfare.mp3` – Sound effects (add your own)

---
Enjoy learning array operations and pattern matching in a fun, interactive way!
