/**
 * Valdi Debug Extension
 * الإصدار: v1.0.0
 * الوصف: أداة مساعدة لتسجيل الأحداث والأخطاء داخل بيئة Valdi.
 */

class ValdiDebugger {
  constructor(context = 'default') {
    this.context = context;
    this.logs = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const entry = `[DEBUG][${this.context}] ${timestamp} - ${message}`;
    this.logs.push(entry);
    console.log(entry);
  }

  error(message) {
    const timestamp = new Date().toISOString();
    const entry = `[ERROR][${this.context}] ${timestamp} - ${message}`;
    this.logs.push(entry);
    console.error(entry);
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
    console.warn(`[DEBUG][${this.context}] سجل الأخطاء تم مسحه.`);
  }
}

// مثال استخدام
const debuggerInstance = new ValdiDebugger('Valdi-Core');
debuggerInstance.log('تم تشغيل وحدة التصحيح.');
debuggerInstance.error('حدث خطأ غير متوقع أثناء التهيئة.');

module.exports = ValdiDebugger;
