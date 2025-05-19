// apiService.js
export async function fetchReps() {
  try {
    const response = await fetch('/api/reps');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
