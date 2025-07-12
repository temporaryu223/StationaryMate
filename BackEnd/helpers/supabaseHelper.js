const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
const fs = require('fs');

const uploadToSupabase = async (file) => {
  try {
    const filePath = file.path;
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = `${Date.now()}-${file.originalname}`;
    const { data, error } = await supabase.storage
      .from('pdfs')
      .upload(fileName, fileBuffer, {
        contentType: 'application/pdf',
        upsert: false,
      });

    if (error) {
      return error;
    }

    const { data: publicUrlData } = supabase.storage
      .from('pdfs')
      .getPublicUrl(fileName);
    const publicUrl = publicUrlData.publicUrl;

    return {
      url: publicUrl,
      publicId: fileName,
    };
  } catch (e) {
    console.log('Error in Cloudinary Helper', e);
  }
};

module.exports = { uploadToSupabase };
