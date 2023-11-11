import { createClient } from '@supabase/supabase-js';

const URL = 'https://ahskmpgfkbwuyujbmyzw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoc2ttcGdma2J3dXl1amJteXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMTc3MTksImV4cCI6MjAxNDg5MzcxOX0.kr_9GAoy1SWDEnJ5khvmiRNrlHfa4iCyoRj0QwQBdu8';

export const supabase = createClient(URL, API_KEY);