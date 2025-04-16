import db from '@/lib/db';

export default function handler(req, res) {
  try {
    const stmt = db.prepare('SELECT * FROM dua');
    const categories = stmt.all();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: err.message,
    });
  }
}
