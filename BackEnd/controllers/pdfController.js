const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const uploadToSupabase = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(500).json({
        success: false,
        messsage: 'File is Not Uploaded',
      });
    }
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = `${Date.now()}-${req.file.originalname}`;

    const { data, error } = await supabase.storage
      .from('pdfs')
      .upload(fileName, fileBuffer, {
        contentType: 'application/pdf',
        upsert: false,
      });

    fs.unlinkSync(filePath);

    if (error) {
      return res.status(500).json({
        success: false,
        messsage: 'File is Not Uploaded',
      });
    }

    const publicUrl = supabase.storage.from('pdfs').getPublicUrl(fileName);
    console.log(publicUrl);

    return res.status(200).json({
      success: true,
      messsage: 'File Uploaded',
      url: publicUrl,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      messsage: 'File is Not Uploaded',
    });
  }
};

module.exports = uploadToSupabase;
