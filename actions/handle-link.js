"use server"

export const handleSubmit = async (inputLink) => {
    const link = inputLink.trim(); // clear the whitespaces
    // checks whether the link is valid or not
    const linkCheck = (link) => {
        if (link) {
            if (!link.includes(" ")) {
                if (link.startsWith("https://") || link.startsWith("http://")) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
    // if link is valid then returns true or else returns false
    const isValid = linkCheck(link);
    if (isValid) {
        return true;
    }
    return false;
}
