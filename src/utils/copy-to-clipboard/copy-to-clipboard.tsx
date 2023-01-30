export function copyToClipboard(text: string) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    return copyToClipboardOverride(text);
}

export function createTextArea(text: string): HTMLTextAreaElement {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    return textArea;
}

export function appendToBody(textArea: HTMLTextAreaElement) {
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
}

export function copyToClipboardOverride(text: string): Promise<void> {
    const textArea = createTextArea(text);
    appendToBody(textArea);
    return new Promise((resolve, reject) => {
        document.execCommand('copy') ? resolve() : reject();
        textArea.remove();
    });
}
